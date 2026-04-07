import { useState } from "react";
import { useForm } from "react-hook-form";
import { Eye, Pencil, Trash2, Plus } from "lucide-react";
import AdminTable from "../../components/admin/AdminTable";
import AdminModal from "../../components/admin/AdminModal";
import FormInput from "../../components/FormInput";
import FormSelect from "../../components/FormSelect";
import { AdminBeneficiario, mockBeneficiarios } from "../../data/mockData";
import type { BeneficiarioFormData } from "../../types";

const AdminBeneficiarios = () => {
  const [data, setData] = useState<AdminBeneficiario[]>([...mockBeneficiarios]);
  const [modalOpen, setModalOpen] = useState(false);
  const [viewItem, setViewItem] = useState<AdminBeneficiario | null>(null);
  const [editId, setEditId] = useState<string | null>(null);
  const { register, handleSubmit, reset, formState: { errors } } = useForm<BeneficiarioFormData>();

  const openNew = () => { setEditId(null); reset({ nomeCompleto: "", cpf: "", dataNascimento: "", responsavel: "", telefone: "", email: "", cidade: "", estado: "" }); setModalOpen(true); };
  const openEdit = (item: AdminBeneficiario) => { setEditId(item.id); reset(item); setModalOpen(true); };
  const onDelete = (id: string) => setData((prev) => prev.filter((i) => i.id !== id));

  const onSubmit = (formData: BeneficiarioFormData) => {
    if (editId) {
      setData((prev) => prev.map((i) => (i.id === editId ? { ...i, ...formData } : i)));
    } else {
      setData((prev) => [...prev, { ...formData, id: Date.now().toString(), statusTriagem: "pendente", dataCadastro: new Date().toISOString().split("T")[0] }]);
    }
    setModalOpen(false);
  };

  const columns = [
    { key: "nomeCompleto", label: "Nome" },
    { key: "cpf", label: "CPF" },
    { key: "cidade", label: "Cidade" },
    {
      key: "statusTriagem", label: "Status Triagem",
      render: (item: AdminBeneficiario) => {
        const colors = { pendente: "bg-yellow-100 text-yellow-800", aprovado: "bg-green-100 text-green-800", reprovado: "bg-red-100 text-red-800" };
        return <span className={`px-2 py-1 text-xs rounded-full font-medium ${colors[item.statusTriagem]}`}>{item.statusTriagem}</span>;
      },
    },
  ];

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="font-display text-2xl font-bold text-foreground">Beneficiários</h1>
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

      {/* View Modal */}
      <AdminModal open={!!viewItem} onClose={() => setViewItem(null)} title="Detalhes do Beneficiário">
        {viewItem && (
          <dl className="space-y-2 text-sm">
            {Object.entries({ Nome: viewItem.nomeCompleto, CPF: viewItem.cpf, "Data Nascimento": viewItem.dataNascimento, Responsável: viewItem.responsavel, Telefone: viewItem.telefone, Email: viewItem.email, Cidade: viewItem.cidade, Estado: viewItem.estado, Status: viewItem.statusTriagem }).map(([k, v]) => (
              <div key={k} className="flex gap-2"><dt className="font-semibold text-foreground w-32">{k}:</dt><dd className="text-muted-foreground">{v}</dd></div>
            ))}
          </dl>
        )}
      </AdminModal>

      {/* Form Modal */}
      <AdminModal open={modalOpen} onClose={() => setModalOpen(false)} title={editId ? "Editar Beneficiário" : "Novo Beneficiário"}>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
          <FormInput label="Nome Completo" {...register("nomeCompleto", { required: "Obrigatório" })} error={errors.nomeCompleto?.message} />
          <FormInput label="CPF" {...register("cpf", { required: "Obrigatório" })} error={errors.cpf?.message} />
          <FormInput label="Data Nascimento" type="date" {...register("dataNascimento", { required: "Obrigatório" })} error={errors.dataNascimento?.message} />
          <FormInput label="Responsável" {...register("responsavel", { required: "Obrigatório" })} error={errors.responsavel?.message} />
          <FormInput label="Telefone" {...register("telefone", { required: "Obrigatório" })} error={errors.telefone?.message} />
          <FormInput label="Email" type="email" {...register("email", { required: "Obrigatório", pattern: { value: /^\S+@\S+$/i, message: "Email inválido" } })} error={errors.email?.message} />
          <FormInput label="Cidade" {...register("cidade", { required: "Obrigatório" })} error={errors.cidade?.message} />
          <FormSelect label="Estado" {...register("estado", { required: "Obrigatório" })} error={errors.estado?.message} options={["SP", "RJ", "MG", "RS", "PR", "SC", "BA", "PE", "CE", "DF"]} />
          <button type="submit" className="w-full py-2.5 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity">
            {editId ? "Salvar" : "Cadastrar"}
          </button>
        </form>
      </AdminModal>
    </div>
  );
};

export default AdminBeneficiarios;
