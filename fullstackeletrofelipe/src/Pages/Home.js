import {lazy, Suspense} from 'react';
const BemVindo = lazy(() => import('../Codesplitting/BemVindo/index'));

export default function Home() {
    return (
    <div className="container">
      <div className="jumbotron bg-light">
      <Suspense maxDuration={1000} fallback={<h5 class="text-center -mt-5">carregando...</h5> }>
                    <BemVindo />
        </Suspense>
      </div>
    </div>
    )
}