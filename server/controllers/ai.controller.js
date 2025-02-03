import { getGroqChatCompletion } from '../models/ai.model.js';


const assistant = async (req, res) => {
    const { message, model } = req.body;
    if (!message || !model) {
        return res.status(400).send({
            message: "Fields required"
        })
    }
    try {
        const chat = await getGroqChatCompletion(message, model);
        return res.status(200).send(chat.choices[0].message.content);
    }
    catch (error) {
        console.log("Error: ", error);
    }


}

export default assistant;