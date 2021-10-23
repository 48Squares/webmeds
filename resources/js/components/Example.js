import React, { Suspense} from "react";
import ReactDOM from 'react-dom';


const OtherComponent = React.lazy(() => import('./Lazy'));

function Example() {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">Example Component</div>
                        <Suspense fallback={<div>Loading...</div>}>
                            <OtherComponent />
                        </Suspense>
                        <div className="card-body">I'm an example component!</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Example;

if (document.getElementById('app')) {
    ReactDOM.render(<Example/>, document.getElementById('app'));
}
