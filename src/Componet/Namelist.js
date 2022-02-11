import React from 'react'
function Namelist() {
    const Amaxzoneproduct=[
        {
            Pname:"biscuit",
            pid:1,
            plocation:'hp',
        },
        {
            Pname:"icecream",
            pid:2,
            plocation:'up',
        },
        {
            Pname:"laptop",
            pid:3,
            plocation:'Ghazjipur',
        },
        {
            Pname:"book",
            pid:4,
            plocation:'punjab',
        },
        {
            Pname:"sliiper",
            pid:5,
            plocation:'A.p',
        }

    ]
    const product =Amaxzoneproduct.map(person =><product person></product>)

  return (
    <div>
        <product></product>
    {product}
    </div>
  )
}

export default Namelist