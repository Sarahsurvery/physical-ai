import axios from 'axios';


export async function askQwen(prompt: string) {
const res = await axios.post(
'https://dashscope.aliyuncs.com/api/v1/services/aigc/text-generation/generation',
{
model: 'qwen-turbo',
input: { prompt }
},
{
headers: {
Authorization: `Bearer ${process.env.QWEN_API_KEY}`
}
}
);


return res.data.output.text;
}