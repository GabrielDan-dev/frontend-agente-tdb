import { useState } from "react";
import { useForm } from "react-hook-form";
import { Eye, Pencil, Trash2, Plus } from "lucide-react";
import AdminTable from "../../components/admin/AdminTable";
import AdminModal from "../../components/admin/AdminModal";
import FormInput from "../../components/FormInput";
import FormSelect from "../../components/FormSelect";
import { AdminDoacao, mockDoacoes } from "../../data/mockData";
import type { DoacaoFormData } from "../../types";

const AdminDoacoes = () => {
  const [data, setData] = useState<AdminDoacao[]>([...mockDoacoes]);
  const [modalOpen, setModalOpen] = useState(false);
  const [viewItem, setViewItem] = useState<AdminDoacao | null>(null);
  const [editId, setEditId] = useState<string | null>(null);
  const { register, handleSubmit, reset, formState: { errors } } = useForm<DoacaoFormData>();

  const openNew = () => { setEditId(null); reset({ nomeCompleto: "", email: "", tipoDoacao: "", valor: "", mensagem: "" }); setModalOpen(true); };
  const openEdit = (item: AdminDoacao) => { setEditId(item.id); reset(item); setModalOpen(true); };
  const onDelete = (id: string) => setData((prev) => prev.filter((i) => i.id !== id));

  const onSubmit = (formData: DoacaoFormData) => {
    if (editId) {
      setData((prev) => prev.map((i) => (i.id === editId ? { ...i, ...formData } : i)));
    } else {
      setData((prev) => [...prev, { ...formData, id: Date.now().toString(), dataCadastro: new Date().toISOString().split("T")[0] }]);
    }
    setModalOpen(false);
  };

  const columns = [
    { key: "nomeCompleto", label: "Nome" },
    { key: "tipoDoacao", label: "Tipo" },
    { key: "valor", label: "Valor", render: (item: AdminDoacao) => <span>R$ {Number(item.valor).toLocaleString("pt-BR")}</span> },
    { key: "dataCadastro", label: "Data" },
  ];

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="font-display text-2xl font-bold text-foreground">Doações</h1>
        <button onClick={openNew} className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity">
          <Plus size={16} /> Nova
        </button>
      </div>

      <AdminTable columns={columns} data={data} actions={(item) => (
        <div className="flex gap-2">
          <button onClick={() => setViewItem(item)} className="p-1.5 rounded hover:bg-accent text-muted-foreground hover:text-foreground"><Eye size={16} /></button>
          <button onClick={() => openEdit(item)} className="p-1.5 rounded hover:bg-accent text-muted-foreground hover:text-foreground"><Pencil size={16} /></button>
          <button onClick={() => onDelete(item.id)} className="p-1.5 rounded hover:bg-destructive/10 text-muted-foreground hover:text-destructive"><Trash2 size={16} /></button>
        </div>
      )} />

      <AdminModal open={!!viewItem} onClose={() => setViewItem(null)} title="Detalhes da Doação">
        {viewItem && (
          <dl className="space-y-2 text-sm">
            {Object.entries({ Nome: viewItem.nomeCompleto, Email: viewItem.email, Tipo: viewItem.tipoDoacao, Valor: `R$ ${Number(viewItem.valor).toLocaleString("pt-BR")}`, Mensagem: viewItem.mensagem || "—", Data: viewItem.dataCadastro }).map(([k, v]) => (
              <div key={k} className="flex gap-2"><dt className="font-semibold text-foreground w-32">{k}:</dt><dd className="text-muted-foreground">{v}</dd></div>
            ))}
          </dl>
        )}
      </AdminModal>

      <AdminModal open={modalOpen} onClose={() => setModalOpen(false)} title={editId ? "Editar Doação" : "Nova Doação"}>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
          <FormInput label="Nome Completo" {...register("nomeCompleto", { required: "Obrigatório" })} error={errors.nomeCompleto?.message} />
          <FormInput label="Email" type="email" {...register("email", { required: "Obrigatório", pattern: { value: /^\S+@\S+$/i, message: "Email inválido" } })} error={errors.email?.message} />
          <FormSelect label="Tipo de Doação" {...register("tipoDoacao", { required: "Obrigatório" })} error={errors.tipoDoacao?.message} options={["Financeira", "Material", "Serviço"]} />
          <FormInput label="Valor (R$)" type="number" {...register("valor", { required: "Obrigatório" })} error={errors.valor?.message} />
          <FormInput label="Mensagem" {...register("mensagem")} />
          <button type="submit" className="w-full py-2.5 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity">{editId ? "Salvar" : "Cadastrar"}</button>
        </form>
      </AdminModal>
    </div>
  );
};

export default AdminDoacoes;
