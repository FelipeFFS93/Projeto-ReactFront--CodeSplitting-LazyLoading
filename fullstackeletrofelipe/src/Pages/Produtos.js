import { Row } from 'react-bootstrap';
import Categorias from '../Codesplitting/Produtos/categorias.js';
import {lazy, Suspense} from 'react';
const Produtos = lazy(() => import('../Codesplitting/Produtos'));

export default function ViewProdutos() {

    return (
        <Row>
            <Categorias />
            <div className="col-lg-10 col-md-10 col-sm-12 col-xs-12">
                <Suspense maxDuration={1000} fallback={<h5 class="text-center -mt-5">carregando...</h5> }>
                    <Produtos />
                </Suspense>
            </div>
        </Row>
    );
}