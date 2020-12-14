import Header from '../../components/Header'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import '../../styles/Quill/styles'
import { useCallback, useState } from 'react';
import { Container, Content } from '../../styles/Quill/styles';



const QuillEditor = () => {
    const [value, setValue] = useState('');
    const Quill = ReactQuill.Quill;
    var Font = Quill.import("formats/font");
    Font.whitelist = ["Roboto", "Raleway", "Montserrat", "Lato", "Rubik"];
    Quill.register(Font, true);


    const formats = [
        "header",
        "font",
        "bold",
        "italic",
        "underline",
        "strike",
        "blockquote",
        "background",
        "code",
        "script",
        "list",
        "bullet",
        "indent",
        "link",
        "image",
        "video",
    ];

    const modules = {
        toolbar: [
            [{ header: "1" }, { header: "2" }, { font: Font.whitelist }],
            ["bold", "italic", "underline", "strike", "blockquote"],
            [{ color: [] }, { background: [] }],
            [{ align: [] }],
            [
                { list: "ordered" },
                { list: "bullet" },
                { indent: "-1" },
                { indent: "+1" },
            ],
            ["link", "image", "video"],
            [{ script: "sub" }, { script: "super" }],
        ],
    };


    return (
        <Container>
            <Header></Header>
            <Content>
                <ReactQuill
                    modules={modules}
                    formats={formats}
                    theme="snow"
                />
            </Content>
        </Container>
    )
}


export default QuillEditor
