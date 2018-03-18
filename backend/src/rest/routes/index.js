/**
 * Configuration routes
 * @module @backend/src/rest
 * @author Fausto Junqueira <fausto.junqueira@radixeng.com.br>
 */
import rdx from 'rdx-framework';
import {
  alunoBusiness,
  aulaBusiness,
  disciplinaBusiness,
  presencaBusiness,
  professorBusiness,
  qrcodeBusiness,
  avaliacaoBusiness
} from "../../business";

const avaliacaoRouter = rdx.http.router();
const qrcodeRouter = rdx.http.router();

qrcodeRouter.get("/gerar/:id", (req, res, next) => qrcodeBusiness.gerarQrCodeToken(req.params.id).then(token => res.json({token})).catch(next));
qrcodeRouter.post("/validar", (req, res, next) => qrcodeBusiness.validarQrCodeToken(req.body.token, req.body.aluno).then(d => res.json(d)).catch(next));
avaliacaoRouter.post('/avaliar', (req, res, next) => avaliacaoBusiness.avaliar(req.body.presencaId, req.body.estrelas, req.body.descricao).then(d => res.json(d)).catch(next));

export default {
  "/aluno": rdx.pouchdb.crud.crudRouter(rdx.http.router(), alunoBusiness),
  "/aula": rdx.pouchdb.crud.crudRouter(rdx.http.router(), aulaBusiness),
  "/disciplina": rdx.pouchdb.crud.crudRouter(rdx.http.router(), disciplinaBusiness),
  "/presenca": rdx.pouchdb.crud.crudRouter(rdx.http.router(), presencaBusiness),
  "/professor": rdx.pouchdb.crud.crudRouter(rdx.http.router(), professorBusiness),
  "/avaliacao": rdx.pouchdb.crud.crudRouter(avaliacaoRouter, avaliacaoBusiness),
  "/qrcode": qrcodeRouter
}
