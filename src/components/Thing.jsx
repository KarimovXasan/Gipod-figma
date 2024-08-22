import React from 'react'
import { Gitpod } from '../assets/data'

const Thing = () => {
    return (
        <section>
            <div className='container grid md:grid-cols-1 lg:grid-cols-2 gap-16 items-center my-11'>
                <div className='text-center md:text-start lg:text-start space-y-2'>
                    <h3>Think CI/CD for dev environments</h3>
                    <p className='text-gray'>We invented prebuilds so application code, configuration and infrastructure can all be stored as machine-executable code <br /> in your git repositories and applied to dev environments <br /> automatically and continuously.</p>
                    <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4'>
                        <button className="More">More on prebuilds</button>
                        <button className="Documentation">Documentation</button>
                    </div>
                </div>
                <div>
                    <img src={Gitpod} alt="" />
                </div>
            </div>
        </section>
    )
}

export default Thing