require.config({ paths: { vs: 'https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.52.2/min/vs' } });

require(['vs/editor/editor.main'], function () {
    const container = document.getElementsByClassName('container')[0];
    const topNav = document.getElementById('top-nav');
    const editorNav = document.getElementById('editor-nav');
    const codeEditor = document.getElementById('code-editor');
    const editor = monaco.editor.create(codeEditor, {
        value: ['function x() {', '\tconsole.log("Hello world!");', '}'].join('\n'),
        language: 'javascript',
        // theme: 'vs-dark',
    });
    document.body.style = 'background-color: var(--vscode-editor-background);';

    // editor.setValue('test')
            monaco.editor.setTheme('vs-dark');
            console.log(
                monaco.languages.getLanguages(),
                editor,
                monaco.editor,
            );

    // window.editor = editor;
            // monaco.editor.setModelLanguage(editor._modelData.model, 'vb')
    console.log(editor.value)
    document.getElementById('test').addEventListener('click', () => {
        console.log(editor)
        console.log(monaco.editor.getEditors())
    })
});