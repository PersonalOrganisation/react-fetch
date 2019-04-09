import  React  from  'react';

const  DisplayEmployee = ({ simpsons }) => {
    return (
        <div  className="DisplayEmployee">
            <ul>
                <li><img  src={simpsons.image}  alt=""  /></li>
                <li>Name : {simpsons.character}</li>
                <li>Quote : {simpsons.quote} </li>
            </ul>
        </div>
    );
};

export  default  DisplayEmployee;