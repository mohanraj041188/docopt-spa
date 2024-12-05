import { Suspense, lazy } from 'react';
const OpenStreetMap = lazy(() => import('./OpenStreetMap'));

export default function LazyMap() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <OpenStreetMap />
        </Suspense>
    );
}
