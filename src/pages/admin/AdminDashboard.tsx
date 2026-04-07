import { Link } from "react-router-dom";
import { Users, Stethoscope, HandHelping, DollarSign, MessageCircle } from "lucide-react";
import { mockBeneficiarios, mockDentistas, mockVoluntarios, mockDoacoes, mockAtendimentos } from "../../data/mockData";

const stats = [
  { label: "Beneficiários", value: mockBeneficiarios.length, icon: Users, to: "/admin/beneficiarios", color: "bg-primary" },
  { label: "Dentistas", value: mockDentistas.length, icon: Stethoscope, to: "/admin/dentistas", color: "bg-secondary" },
  { label: "Voluntários", value: mockVoluntarios.length, icon: HandHelping, to: "/admin/voluntarios", color: "bg-accent" },
  { label: "Doações", value: mockDoacoes.length, icon: DollarSign, to: "/admin/doacoes", color: "bg-primary" },
  { label: "Atendimentos", value: mockAtendimentos.length, icon: MessageCircle, to: "/admin/atendimentos", color: "bg-secondary" },
];

const AdminDashboard = () => {
  const recentItems = [
    ...mockBeneficiarios.map((b) => ({ tipo: "Beneficiário", nome: b.nomeCompleto, data: b.dataCadastro })),
    ...mockDentistas.map((d) => ({ tipo: "Dentista", nome: d.nomeCompleto, data: d.dataCadastro })),
    ...mockVoluntarios.map((v) => ({ tipo: "Voluntário", nome: v.nomeCompleto, data: v.dataCadastro })),
    ...mockDoacoes.map((d) => ({ tipo: "Doação", nome: d.nomeCompleto, data: d.dataCadastro })),
    ...mockAtendimentos.map((a) => ({ tipo: "Atendimento", nome: a.nome, data: a.dataCadastro })),
  ].sort((a, b) => b.data.localeCompare(a.data)).slice(0, 8);

  return (
    <div className="space-y-6">
      <h1 className="font-display text-2xl font-bold text-foreground">Dashboard</h1>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {stats.map((s) => (
          <Link
            key={s.label}
            to={s.to}
            className="bg-card rounded-xl border border-border p-4 hover:shadow-md transition-shadow"
          >
            <div className={`inline-flex p-2 rounded-lg ${s.color} text-primary-foreground mb-3`}>
              <s.icon size={20} />
            </div>
            <p className="text-2xl font-display font-bold text-foreground">{s.value}</p>
            <p className="text-sm text-muted-foreground">{s.label}</p>
          </Link>
        ))}
      </div>

      <div className="bg-card rounded-xl border border-border">
        <div className="p-4 border-b border-border">
          <h2 className="font-display font-semibold text-foreground">Cadastros Recentes</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-muted">
                <th className="text-left px-4 py-3 font-display font-semibold text-foreground">Tipo</th>
                <th className="text-left px-4 py-3 font-display font-semibold text-foreground">Nome</th>
                <th className="text-left px-4 py-3 font-display font-semibold text-foreground">Data</th>
              </tr>
            </thead>
            <tbody>
              {recentItems.map((item, i) => (
                <tr key={i} className="border-t border-border hover:bg-accent/50 transition-colors">
                  <td className="px-4 py-3 text-foreground">
                    <span className="px-2 py-1 text-xs rounded-full bg-muted font-medium">{item.tipo}</span>
                  </td>
                  <td className="px-4 py-3 text-foreground">{item.nome}</td>
                  <td className="px-4 py-3 text-muted-foreground">{item.data}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
