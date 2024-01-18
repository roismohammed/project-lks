import React, { Fragment } from 'react'

export default function Card({ judulCard, isiCard, tombolCard }) {
    return (
        <Fragment>
            <div className="row">
                <div className="col-sm-6 mb-3 mb-sm-0">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">{judulCard}</h5>
                            <p className="card-text">
                                {isiCard}                            </p>
                            <a href="#" className="btn btn-primary">
                                {tombolCard}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
