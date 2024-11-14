
const Contact = () => {
    return (
        <div>

            <form action="php">
                <h1>Contact form</h1>
                <label id="name">Name:</label>
                <input type="text" id="name" name="name" required />

                <label id="email">Email:</label>
                <input type="email" id="email" name="email" required />

                <label id="message">Message:</label>
                <textarea id="message" name="message" required></textarea>

                <input type="submit" value="Submit" />
                
            </form>
            
        </div>
    );
};

export default Contact;