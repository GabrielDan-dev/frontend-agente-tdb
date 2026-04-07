import { useState } from "react";
import { Eye, Trash2, CheckCircle } from "lucide-react";
import AdminTable from "../../components/admin/AdminTable";
import AdminModal from "../../components/admin/AdminModal";
import { AdminAtendimento, mockAtendimentos } from "../../data/mockData";

const AdminAtendimentos = () => {
  const [data, setData] = useState<AdminAtendimento[]>([...mockAtendimentos]);
  const [viewItem, setViewItem] = useState<AdminAtendimento | null>(null);

  const toggleRespondido = (id: string) => setData((prev) => prev.map((i) => (i.id === id ? { ...i, respondido: !i.respondido } : i)));
  const onDelete = (id: string) => setData((prev) => prev.filter((i) => i.id !== id));

  const columns = [
    { key: "nome", label: "Nome" },
    { key: "assunto", label: "Assunto" },
    { key: "mensagem", label: "Mensagem", render: (item: AdminAtendimento) => <span className="truncate max-w-[200px] block">{item.mensagem}</span> },
    {
      key: "respondido", label: "Status",
      render: (item: AdminAtendimento) => (
        <span className={`px-2 py-1 text-xs rounded-full font-medium ${item.respondido ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"}`}>
          {item.respondido ? "Respondido" : "Pendente"}
        </span>
      ),
    },
  ];

  return (
    <div className="space-y-4">
      <h1 className="font-display text-2xl font-bold text-foreground">Atendimentos</h1>

      <AdminTable columns={columns} data={data} actions={(item) => (
        <div className="flex gap-2">
          <button onClick={() => setViewItem(item)} className="p-1.5 rounded hover:bg-accent text-muted-foreground hover:text-foreground"><Eye size={16} /></button>
          <button onClick={() => toggleRespondido(item.id)} className="p-1.5 rounded hover:bg-accent text-muted-foreground hover:text-foreground" title="Marcar como respondido"><CheckCircle size={16} /></button>
          <button onClick={() => onDelete(item.id)} className="p-1.5 rounded hover:bg-destructive/10 text-muted-foreground hover:text-destructive"><Trash2 size={16} /></button>
        </div>
      )} />

      <AdminModal open={!!viewItem} onClose={() => setViewItem(null)} title="Detalhes do Atendimento">
        {viewItem && (
          <dl className="space-y-2 text-sm">
            {Object.entries({ Nome: viewItem.nome, Email: viewItem.email, Assunto: viewItem.assunto, Mensagem: viewItem.mensagem, Status: viewItem.respondido ? "Respondido" : "Pendente", Data: viewItem.dataCadastro }).map(([k, v]) => (
              <div key={k} className="flex gap-2"><dt className="font-semibold text-foreground w-32">{k}:</dt><dd className="text-muted-foreground">{v}</dd></div>
            ))}
          </dl>
        )}
      </AdminModal>
    </div>
  );
};

export default AdminAtendimentos;
