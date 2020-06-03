import React from 'react'

function Form(props) {
    const submitDisabled = 
    props.input.firstName.length < 3 ||
    props.input.lastName.length < 3 || 
    props.input.phone.length != 9 ||
    props.input.email.length < 3 ||
    props.input.hometown.length < 3 ||
    props.input.favFood.length < 3 ||
    props.input.story.length < 3 ?
    true:false
    return(
        <form onSubmit={props.submitHandler}>
            <label>
                first name
                <input type="text" 
                placeholder="first" 
                name="firstName" 
                onChange={props.changeHandler} 
                value={props.input.firstName} 
                required 
                minLength='3' />
            </label>
            <label>
                last name
                <input type="text" 
                placeholder="last" 
                name="lastName" 
                onChange={props.changeHandler} 
                value={props.input.lastName} 
                required 
                minLength='3' />
            </label>
            <label>
                main email
                <input type="text" 
                placeholder="slug@email.com" name="email" 
                onChange={props.changeHandler} 
                value={props.input.email}  
                required="required" 
                minLength='3' />
            </label>
            <label>
                hometown
                <input type="text" 
                placeholder="place of birth" 
                name="hometown" 
                onChange={props.changeHandler}
                value={props.input.hometown} 
                required 
                minLength='3' />
            </label>
            <label>
                telephone number
                <input type="tel" 
                id="phone" 
                placeholder="123456789" 
                pattern="[0-9]{9}" 
                name="phone" 
                onChange={props.changeHandler}
                value={props.input.phone} 
                required minLength='9'  
                maxLength='9'/>
            </label>
            <label>
                favorite food      
                <input type="text" 
                    placeholder="" name="favFood" 
                    onChange={props.changeHandler} 
                    value={props.input.favFood}
                    required 
                    minLength='3' />
            </label>
            <label id="textareaLabel">
                about me      
                <textarea type="textarea" 
                    id="textarea" 
                    placeholder="Your story here" 
                    name="story" 
                    onChange={props.changeHandler} 
                    value={props.input.story} 
                    required 
                    minLength='3' 
                    maxLength='150' />
            </label>
            <button value="submit" disabled={submitDisabled}>Submit
            </button>
        </form>
    )
}

export default Form