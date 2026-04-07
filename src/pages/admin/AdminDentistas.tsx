import { useState } from "react";
import { useForm } from "react-hook-form";
import { Eye, Pencil, Trash2, Plus } from "lucide-react";
import AdminTable from "../../components/admin/AdminTable";
import AdminModal from "../../components/admin/AdminModal";
import FormInput from "../../components/FormInput";
import FormSelect from "../../components/FormSelect";
import { AdminDentista, mockDentistas } from "../../data/mockData";
import type { DentistaFormData } from "../../types";

const AdminDentistas = () => {
  const [data, setData] = useState<AdminDentista[]>([...mockDentistas]);
  const [modalOpen, setModalOpen] = useState(false);
  const [viewItem, setViewItem] = useState<AdminDentista | null>(null);
  const [editId, setEditId] = useState<string | null>(null);
  const { register, handleSubmit, reset, formState: { errors } } = useForm<DentistaFormData>();

  const openNew = () => { setEditId(null); reset({ nomeCompleto: "", cro: "", especialidade: "", email: "", telefone: "", cidade: "", estado: "" }); setModalOpen(true); };
  const openEdit = (item: AdminDentista) => { setEditId(item.id); reset(item); setModalOpen(true); };
  const onDelete = (id: string) => setData((prev) => prev.filter((i) => i.id !== id));

  const onSubmit = (formData: DentistaFormData) => {
    if (editId) {
      setData((prev) => prev.map((i) => (i.id === editId ? { ...i, ...formData } : i)));
    } else {
      setData((prev) => [...prev, { ...formData, id: Date.now().toString(), ativo: true, dataCadastro: new Date().toISOString().split("T")[0] }]);
    }
    setModalOpen(false);
  };

  const columns = [
    { key: "nomeCompleto", label: "Nome" },
    { key: "cro", label: "CRO" },
    { key: "especialidade", label: "Especialidade" },
    {
      key: "ativo", label: "Ativo",
      render: (item: AdminDentista) => (
        <button
          onClick={() => setData((prev) => prev.map((i) => (i.id === item.id ? { ...i, ativo: !i.ativo } : i)))}
          className={`px-2 py-1 text-xs rounded-full font-medium ${item.ativo ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}
        >
          {item.ativo ? "Sim" : "Não"}
        </button>
      ),
    },
  ];

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="font-display text-2xl font-bold text-foreground">Dentistas</h1>
        <button onClick={openNew} className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity">
          <Plus size={16} /> Novo
        </button>
      </div>

      <AdminTable columns={columns} data={data} actions={(item) => (
        <div className="flex gap-2">
          <button onClick={() => setViewItem(item)} className="p-1.5 rounded hover:bg-accent text-muted-foreground hover:text-foreground"><Eye size={16} /></button>
          <button onClick={() => openEdit(item)} className="p-1.5 rounded hover:bg-accent text-muted-foreground hover:text-foreground"><Pencil size={16} /></button>
          <button onClick={() => onDelete(item.id)} className="p-1.5 rounded hover:bg-destructive/10 text-muted-foreground hover:text-destructive"><Trash2 size={16} /></button>
        </div>
      )} />

      <AdminModal open={!!viewItem} onClose={() => setViewItem(null)} title="Detalhes do Dentista">
        {viewItem && (
          <dl className="space-y-2 text-sm">
            {Object.entries({ Nome: viewItem.nomeCompleto, CRO: viewItem.cro, Especialidade: viewItem.especialidade, Email: viewItem.email, Telefone: viewItem.telefone, Cidade: viewItem.cidade, Estado: viewItem.estado, Ativo: viewItem.ativo ? "Sim" : "Não" }).map(([k, v]) => (
              <div key={k} className="flex gap-2"><dt className="font-semibold text-foreground w-32">{k}:</dt><dd className="text-muted-foreground">{String(v)}</dd></div>
            ))}
          </dl>
        )}
      </AdminModal>

      <AdminModal open={modalOpen} onClose={() => setModalOpen(false)} title={editId ? "Editar Dentista" : "Novo Dentista"}>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
          <FormInput label="Nome Completo" {...register("nomeCompleto", { required: "Obrigatório" })} error={errors.nomeCompleto?.message} />
          <FormInput label="CRO" {...register("cro", { required: "Obrigatório" })} error={errors.cro?.message} />
          <FormSelect label="Especialidade" {...register("especialidade", { required: "Obrigatório" })} error={errors.especialidade?.message} options={["Ortodontia", "Endodontia", "Periodontia", "Implantodontia", "Odontopediatria", "Cirurgia", "Clínico Geral"]} />
          <FormInput label="Email" type="email" {...register("email", { required: "Obrigatório", pattern: { value: /^\S+@\S+$/i, message: "Email inválido" } })} error={errors.email?.message} />
          <FormInput label="Telefone" {...register("telefone", { required: "Obrigatório" })} error={errors.telefone?.message} />
          <FormInput label="Cidade" {...register("cidade", { required: "Obrigatório" })} error={errors.cidade?.message} />
          <FormSelect label="Estado" {...register("estado", { required: "Obrigatório" })} error={errors.estado?.message} options={["SP", "RJ", "MG", "RS", "PR", "SC", "BA", "PE", "CE", "DF"]} />
          <button type="submit" className="w-full py-2.5 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity">{editId ? "Salvar" : "Cadastrar"}</button>
        </form>
      </AdminModal>
    </div>
  );
};

export default AdminDentistas;
