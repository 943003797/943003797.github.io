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
            { text: 'LLM', link: '/llm', activeMatch: 'llm'},
            { text: 'SD', link: '/sd', activeMatch: 'sd'},
            { text: 'AI Agent', link: '/autogen', activeMatch: 'Autogen'}
        ],
        activeMatch: 'AIGC'
    },
    {
        text: 'Python',
        items: [
            { text: 'Env', link: '/python/env', activeMatch: 'python/env'},
            { text: 'UV', link: '/python/uv', activeMatch: 'python/uv'}
        ],
        activeMatch: 'Python'
    }
];