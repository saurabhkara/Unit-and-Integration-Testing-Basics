import { screen, render } from "@testing-library/react";
import CommentList from "../component/CommentList";




test('Comments are not available', ()=>{
    render(<CommentList allComments={[]}/>);
    const h2Elem = screen.getByText('No comments', {exact:false});
    expect(h2Elem).toBeInTheDocument();
});


test('List of Comments', ()=>{
    const comment = [
        {id:Date.now(), text:'Nice thought'},
        {id:Date.now(),text:'Beautiful Shloka'}
    ]
    render(<CommentList allComments={comment}/>);

    const h2Elem  = screen.queryByText('No comments', {exact:false});
    expect(h2Elem).not.toBeInTheDocument();

    const commentList =screen.getAllByRole('listitem');
    expect(commentList.length).toBe(comment.length);

    // const listOne = screen.getByText('Nice thought', {exact:false}); 
    // const listTwo = screen.getByText('Beautiful Shloka', {exact:false}); 
    // expect(listOne).toBeInTheDocument();
    // expect(listTwo).toBeInTheDocument();
})