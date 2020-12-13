import Draft from 'draft-js'

export const emptyContentState = Draft.convertFromRaw({
    entityMap: {},
    blocks: [
        {
            text: '',
            key: 'foo',
            type: 'unstyled',
            entityRanges: [],
            depth: 0,
            inlineStyleRanges: []
        },
    ],
});