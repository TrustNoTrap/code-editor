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
    // document.body.style = 'background-color: var(--vscode-editor-background);';
    applyStyles(document.body, {
        backgroundColor: '#151515',
        color: 'white',
        fontFamily: '"Segoe WPC", "Segoe UI", sans-serif',
    });
    applyStyles(codeEditor, {
        borderColor: '#111111',
    });

    // Sidebar event handlers
    for (const listButton of editorNav.getElementsByTagName('li')) {
        console.log('button', listButton)
        listButton.addEventListener('click', () => {
            // console.log('click')
            const className = 'active';
            if (listButton.classList.contains(className)) return deactivateActiveSideBar(listButton.classList.remove(className));

            const listItems = editorNav.getElementsByClassName(className);
            removeClassName(className, listItems);

            for (const item of listItems) {

            }
            listButton.className = `${listButton.className} ${className}`;
            // listButton.children[1].hidden = false;
        });
    }

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
    // document.getElementById('test').addEventListener('click', () => {
    //     console.log(editor)
    //     console.log(monaco.editor.getEditors())
    // })
});



const applyStyles = (element, styles) => {
    for (const key in styles) {
        element.style[key] = styles[key];
    }
}

const removeClassName = (className, elementsArray) => {
    for (const element of elementsArray) {
        element.classList.remove(className);
    }
}

const hideElement = (element) => {
    element.hidden = true;
}

const showElement = (element) => {
    element.hidden = false;
}

const deactivateActiveSideBar = (element) => {
    if (!element?.children) return;

    for (const child in element.children) {
        if (child.tagName === 'DIV') hideElement(element);
    }
}

class EventHandler {
    constructor({ type, event, handler }) {
        this.type = type;
        this.event = event;
        this.handler = handler;
    }
}