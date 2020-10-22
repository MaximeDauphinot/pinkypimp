import React from 'react';
import './ListMembre.css';
import Radium from 'radium';
import DisplayMembre from './DisplayMembre/DisplayMembre';

const ListMembre = (props) => {
        return (
            <div className="ListMembre">
                <div className="membretitle">
                    <p className="titleMemberStyle">{props.bigTitle}</p>
                </div>                
                <div className="container_ListMembre">
                    <DisplayMembre 
                        member={props.memberColumnOne}
                        open={props.open}
                        index={props.index}
                        title={props.titleColumnOne.name}
                        />
                    <DisplayMembre 
                        member={props.memberColumnTwo}
                        open={props.open}
                        index={props.index}
                        title={props.titleColumnTwo.name}
                        />
                    <DisplayMembre 
                        member={props.memberColumnThree}
                        open={props.open}
                        index={props.index}
                        title={props.titleColumnThree.name}
                        />
                </div>    
            </div>
        );
};

export default Radium(ListMembre);