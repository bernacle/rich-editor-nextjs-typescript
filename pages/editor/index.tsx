import { Header } from '../../components/Header'
import { Editor, EditorState, RichUtils } from 'draft-js'
import 'draft-js/dist/Draft.css';
import { useCallback, useState } from 'react';
import { emptyContentState } from '../../utils/emptyContentState'

import { Container, Content } from './styles'


const Home = () => {
    const [editorState, setEditorState] = useState(() => EditorState.createWithContent(emptyContentState))



    const onChange = useCallback((editorState) => {
        setEditorState(editorState)
    }, [setEditorState])


    const onBoldClick = useCallback(() => {
        setEditorState(RichUtils.toggleInlineStyle(editorState, "BOLD"))
    }, [setEditorState, RichUtils, editorState])

    const onItalicClick = useCallback(() => {
        setEditorState(RichUtils.toggleInlineStyle(editorState, "ITALIC"))
    }, [setEditorState, RichUtils, editorState])

    const onUnderscoreClick = useCallback(() => {
        setEditorState(RichUtils.toggleInlineStyle(editorState, "UNDERLINE"))
    }, [setEditorState, RichUtils, editorState])

    const onH1Click = useCallback((block) => {
        setEditorState(RichUtils.toggleBlockType(editorState, block))
    }, [setEditorState, RichUtils, editorState])

    const handleKeyCommand = useCallback((command, editorState) => {
        const newState = RichUtils.handleKeyCommand(editorState, command)

        if (newState) {
            onChange(newState)
            return 'handled';
        }
        return 'not-handled';

    }, [onChange])




    return (
        <Container>
            <Header></Header>
            <Content>

                <div>
                    <button onClick={() => onH1Click('header-one')}>H1</button>
                    <button onClick={() => onH1Click('header-two')}>H2</button>
                    <button onClick={() => onH1Click('header-three')}>H3</button>
                    <button onClick={() => onH1Click('header-four')}>H4</button>
                </div>
                <div>
                    <button onClick={() => onBoldClick()}>Bold</button>
                    <button onClick={() => onItalicClick()}>Italic</button>
                    <button onClick={() => onUnderscoreClick()}>Underline</button>
                </div>

                <Editor
                    editorKey="editor"
                    editorState={editorState}
                    onChange={onChange}
                    placeholder="Simple editor"
                    handleKeyCommand={handleKeyCommand}
                >
                </Editor>
            </Content>
        </Container>
    )
}
export default Home
