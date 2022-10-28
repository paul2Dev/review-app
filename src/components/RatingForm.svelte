<script>
    import { ReviewStore } from '../stores';

    let btnDisabled = true;
    let style = 'disabled'
    let text = ''
    let rating 
    let min = 10
    let errorMessage = ''

    const handleInput = () => {
        if (text.length < min) {
            btnDisabled = true
            style = 'disabled'
            errorMessage = `Please enter at least ${min} characters`
        } else {
            btnDisabled = false
            style = ''
            errorMessage = null
        }
        
    }

    const handleRatingSelect = (e) => {
        rating = parseInt(e.target.value)
    }

    const submitRatingForm = (e) => {
        e.preventDefault()
        if (text.length < min || rating === undefined) {
            btnDisabled = true
            style = 'disabled'
            errorMessage = `Please enter at least ${min} characters and select a rating`
        } else {
            btnDisabled = false
            style = ''
            errorMessage = null
            ReviewStore.update((reviewList) => {
                return [
                    ...reviewList,
                    {
                        id: Math.random().toString(),
                        rating,
                        text
                    }
                ]
            })
            text = ''
        }
    }
</script>

<h2 class="font-bold text-center my-4">Give us your rating on the product</h2>
<form action="">
    <div class="input-group grow">
        <input name="text" class="grow" on:input={handleInput} bind:value={text}/>
        <select name="rating" id="rating" on:change={handleRatingSelect}>
            <option value="">Select rating</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
        </select>
        <button type="button" {btnDisabled} on:click={submitRatingForm} class="btn {style}">Submit</button>
    </div>    
    <div class="error">
        {#if errorMessage}
            <p>{errorMessage}</p>
        {/if}
    </div>
</form>
