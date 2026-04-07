import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Integrantes from "../pages/Integrantes";
import Sobre from "../pages/Sobre";
import FAQ from "../pages/FAQ";
import Contato from "../pages/Contato";
import Solucao from "../pages/Solucao";
import Voluntario from "../pages/Voluntario";
import Dentista from "../pages/Dentista";
import Beneficiario from "../pages/Beneficiario";
import Doacao from "../pages/Doacao";
import Atendimento from "../pages/Atendimento";
import NotFound from "../pages/NotFound";
import AdminLayout from "../components/admin/AdminLayout";
import AdminLogin from "../pages/admin/AdminLogin";
import AdminDashboard from "../pages/admin/AdminDashboard";
import AdminBeneficiarios from "../pages/admin/AdminBeneficiarios";
import AdminDentistas from "../pages/admin/AdminDentistas";
import AdminVoluntarios from "../pages/admin/AdminVoluntarios";
import AdminDoacoes from "../pages/admin/AdminDoacoes";
import AdminAtendimentos from "../pages/admin/AdminAtendimentos";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/integrantes" element={<Integrantes />} />
      <Route path="/sobre" element={<Sobre />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/contato" element={<Contato />} />
      <Route path="/solucao" element={<Solucao />} />
      <Route path="/voluntario" element={<Voluntario />} />
      <Route path="/dentista" element={<Dentista />} />
      <Route path="/beneficiario" element={<Beneficiario />} />
      <Route path="/doacao" element={<Doacao />} />
      <Route path="/atendimento" element={<Atendimento />} />
      <Route path="/admin/login" element={<AdminLogin />} />
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<AdminDashboard />} />
        <Route path="beneficiarios" element={<AdminBeneficiarios />} />
        <Route path="dentistas" element={<AdminDentistas />} />
        <Route path="voluntarios" element={<AdminVoluntarios />} />
        <Route path="doacoes" element={<AdminDoacoes />} />
        <Route path="atendimentos" element={<AdminAtendimentos />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Router;
