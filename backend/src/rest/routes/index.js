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
  qrcodeBusiness
} from "../../business";

const qrcodeRouter = rdx.http.router();
qrcodeRouter.get("/gerar/{id}", (req, res, next) => qrcodeBusiness.gerarQrCodeToken(req.params.id).then(token => res.json({token})).catch(next));

const aulaRouter = rdx.http.router();
aulaRouter.get("/consolidado/:id", (req, res, next) => aulaBusiness.listAulasDoAluno(req.params.id).then(list => res.json(list)).catch(next));

export default {
  "/aluno": rdx.pouchdb.crud.crudRouter(rdx.http.router(), alunoBusiness),
  "/aula": rdx.pouchdb.crud.crudRouter(aulaRouter, aulaBusiness),
  "/disciplina": rdx.pouchdb.crud.crudRouter(rdx.http.router(), disciplinaBusiness),
  "/presenca": rdx.pouchdb.crud.crudRouter(rdx.http.router(), presencaBusiness),
  "/professor": rdx.pouchdb.crud.crudRouter(rdx.http.router(), professorBusiness),
  "/qrcode": qrcodeRouter
}
