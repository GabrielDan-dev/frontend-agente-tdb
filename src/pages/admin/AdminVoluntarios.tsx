import { useState } from "react";
import { useForm } from "react-hook-form";
import { Eye, Pencil, Trash2, Plus } from "lucide-react";
import AdminTable from "../../components/admin/AdminTable";
import AdminModal from "../../components/admin/AdminModal";
import FormInput from "../../components/FormInput";
import FormSelect from "../../components/FormSelect";
import { AdminVoluntario, mockVoluntarios } from "../../data/mockData";
import type { VoluntarioFormData } from "../../types";

const AdminVoluntarios = () => {
  const [data, setData] = useState<AdminVoluntario[]>([...mockVoluntarios]);
  const [modalOpen, setModalOpen] = useState(false);
  const [viewItem, setViewItem] = useState<AdminVoluntario | null>(null);
  const [editId, setEditId] = useState<string | null>(null);
  const { register, handleSubmit, reset, formState: { errors } } = useForm<VoluntarioFormData>();

  const openNew = () => { setEditId(null); reset({ nomeCompleto: "", email: "", telefone: "", areaAtuacao: "", disponibilidade: "", observacoes: "" }); setModalOpen(true); };
  const openEdit = (item: AdminVoluntario) => { setEditId(item.id); reset(item); setModalOpen(true); };
  const onDelete = (id: string) => setData((prev) => prev.filter((i) => i.id !== id));

  const onSubmit = (formData: VoluntarioFormData) => {
    if (editId) {
      setData((prev) => prev.map((i) => (i.id === editId ? { ...i, ...formData } : i)));
    } else {
      setData((prev) => [...prev, { ...formData, id: Date.now().toString(), dataCadastro: new Date().toISOString().split("T")[0] }]);
    }
    setModalOpen(false);
  };

  const columns = [
    { key: "nomeCompleto", label: "Nome" },
    { key: "areaAtuacao", label: "Área Atuação" },
    { key: "disponibilidade", label: "Disponibilidade" },
  ];

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="font-display text-2xl font-bold text-foreground">Voluntários</h1>
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

      <AdminModal open={!!viewItem} onClose={() => setViewItem(null)} title="Detalhes do Voluntário">
        {viewItem && (
          <dl className="space-y-2 text-sm">
            {Object.entries({ Nome: viewItem.nomeCompleto, Email: viewItem.email, Telefone: viewItem.telefone, Área: viewItem.areaAtuacao, Disponibilidade: viewItem.disponibilidade, Observações: viewItem.observacoes || "—" }).map(([k, v]) => (
              <div key={k} className="flex gap-2"><dt className="font-semibold text-foreground w-32">{k}:</dt><dd className="text-muted-foreground">{v}</dd></div>
            ))}
          </dl>
        )}
      </AdminModal>

      <AdminModal open={modalOpen} onClose={() => setModalOpen(false)} title={editId ? "Editar Voluntário" : "Novo Voluntário"}>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
          <FormInput label="Nome Completo" {...register("nomeCompleto", { required: "Obrigatório" })} error={errors.nomeCompleto?.message} />
          <FormInput label="Email" type="email" {...register("email", { required: "Obrigatório", pattern: { value: /^\S+@\S+$/i, message: "Email inválido" } })} error={errors.email?.message} />
          <FormInput label="Telefone" {...register("telefone", { required: "Obrigatório" })} error={errors.telefone?.message} />
          <FormSelect label="Área de Atuação" {...register("areaAtuacao", { required: "Obrigatório" })} error={errors.areaAtuacao?.message} options={["Triagem", "Eventos", "Comunicação", "Logística", "Administrativo"]} />
          <FormSelect label="Disponibilidade" {...register("disponibilidade", { required: "Obrigatório" })} error={errors.disponibilidade?.message} options={["Manhã", "Tarde", "Noite", "Fins de semana", "Integral"]} />
          <FormInput label="Observações" {...register("observacoes")} />
          <button type="submit" className="w-full py-2.5 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity">{editId ? "Salvar" : "Cadastrar"}</button>
        </form>
      </AdminModal>
    </div>
  );
};

export default AdminVoluntarios;
