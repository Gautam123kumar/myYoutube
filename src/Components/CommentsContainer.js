import React from 'react'

const CommentsData = [
    {
        name: 'gautam kumar',
        text: 'test demo',
        replies: []
    },
    {
        name: 'gautam kumar',
        text: 'test demo',
        replies: [
            {
                name: 'gautam kumar',
                text: 'test demo',
                replies: [
                    {
                        name: 'gautam kumar',
                        text: 'test demo',
                        replies: []
                    },
                    {
                        name: 'gautam kumar',
                        text: 'test demo',
                        replies: [
                            {
                                name: 'gautam kumar',
                                text: 'test demo',
                                replies: [
                                    {
                                        name: 'gautam kumar',
                                        text: 'test demo',
                                        replies: []
                                    },{
                                        name: 'gautam kumar',
                                        text: 'test demo',
                                        replies: []
                                    },{
                                        name: 'gautam kumar',
                                        text: 'test demo',
                                        replies: []
                                    },{
                                        name: 'gautam kumar',
                                        text: 'test demo',
                                        replies: []
                                    },
                                ]
                            },
                        ]
                    },
                ]
            },
            {
                name: 'gautam kumar',
                text: 'test demo',
                replies: []
            },
            {
                name: 'gautam kumar',
                text: 'test demo',
                replies: []
            },
            {
                name: 'gautam kumar',
                text: 'test demo',
                replies: []
            },
            {
                name: 'gautam kumar',
                text: 'test demo',
                replies: []
            },
        ]
    },
    {
        name: 'gautam kumar',
        text: 'test demo',
        replies: []
    },
    {
        name: 'gautam kumar',
        text: 'test demo',
        replies: []
    }, {
        name: 'gautam kumar',
        text: 'test demo',
        replies: []
    },
]

const Comment = ({ data }) => {
    const { name, text, replies } = data;
    return (
        <div className='flex shadow-sm bg-gray-100 p-2 rounded-lg my-2'>
            <img
                className='w-12 h-12'
                alt='user'
                src='https://static.vecteezy.com/system/resources/previews/019/879/198/non_2x/user-icon-on-transparent-background-free-png.png'
            />
            <div className='px-3'>
                <p className='font-bold'>Name:{name}</p>
                <p>Comment:{text}</p>
            </div>
        </div>
    )
}

const CommentsList = ({comments}) => {
    return (
        <div>
            {comments.map((comment,index) => {
                return (
                    <div key={index}>
                        <Comment  data={comment} />
                        <div className='pl-5 border border-l-black ml-5'>
                            <CommentsList comments={comment.replies}/>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

function CommentsContainer() {
    return (
        <div className='m-5 p-2'>
            <h1 className='text-2xl font-bold'>Comments:</h1>
            <CommentsList comments={CommentsData} />
        </div>
    )
}

export default CommentsContainer