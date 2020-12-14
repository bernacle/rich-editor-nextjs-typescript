import Header from '../../components/Header'
import { useCallback, useEffect, useState } from 'react';
import { Container, Content } from '../../styles/Tiny/styles';

import { Editor } from '@tinymce/tinymce-react';



const TinyEditor = () => {

    const handleEditorChange = useCallback((content, editor) => {
        console.log(
            'Content was updated:',
            content
        );
    }, [])


    return (
        <Container>
            <Header></Header>
            <Content>
                <Editor
                    apiKey="x379hr3narigp3jgcd31q8muajt042qsgcsogqv4qk5uhl14"
                    initialValue="<p>Initial content</p>"
                    init={{
                        height: 500,
                        menubar: 'insert',
                        plugins: [
                            'advlist autolink lists link image charmap print preview anchor',
                            'searchreplace visualblocks code fullscreen',
                            'insertdatetime media table paste code help wordcount'
                        ],
                        toolbar:
                            'undo redo | formatselect | image | bold italic backcolor | \
                            alignleft aligncenter alignright alignjustify | \
                            bullist numlist outdent indent | removeformat | help',

                        image_list: [
                            { title: 'My image 1', value: 'https://www.example.com/my1.gif' },
                            { title: 'My image 2', value: 'http://www.moxiecode.com/my2.gif' }
                        ]
                    }}
                    onChange={handleEditorChange}
                />
            </Content>
        </Container>
    )



}


export default TinyEditor
