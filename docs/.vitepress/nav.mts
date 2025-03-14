export default [
    {
        text: 'Docs',
        items: [
            { text: 'PostMan', link: '/postman', activeMatch: 'postman'},
            { text: 'English', link: '/english', activeMatch: 'english'},
            { text: 'ComfyUI', link: '/comfyui', activeMatch: 'comfyui' }
        ],
        activeMatch: 'Docs'
    },
    {
        text: 'AIGC',
        items: [
            { text: 'LLM', link: '/aigc/llm', activeMatch: 'aigc/llm'},
            { text: 'SD', link: '/aigc/sd', activeMatch: 'aigc/sd'},
            { text: 'AI Agent', link: '/aigc/ai-agent', activeMatch: 'aigc/ai-agent'}
        ],
        activeMatch: 'AIGC'
    }
];