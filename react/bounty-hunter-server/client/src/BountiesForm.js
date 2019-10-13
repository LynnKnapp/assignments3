import React from 'react'

const BountiesForm =(props) =>{
    const {FirstName, LastName, isLiving, bountyPrice,type, handleChange, handleSubmit, handleDelete} = props
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                    type='text'
                    value={FirstName}
                    name='firstName'
                    onChange={handleChange}
                    placeholder='First Name'/>
                <input
                    type='text'
                    value={LastName}
                    name='lastName'
                    onChange={handleChange}
                    placeholder='Last Name'/>
                <input
                    type='text'
                    value={isLiving}
                    name='isLiving'
                    onChange={handleChange}
                    placeholder='Is still living'/> 
                <input 
                    type='text'
                    value={bountyPrice}
                    name='bountyPrice'
                    onChange={handleChange}
                    placeholder='Bounty Price'/> 
                <input
                    type='text'
                    value={type}
                    name='type'
                    onChange={handleChange}
                    placeholder='Type'/>
                <button>Submit</button>                 
            </form>
            <button onClick={handleDelete}></button>
        </div>
    )
}
export default BountiesForm