import Comment from "../Comment/Comment";

export default function Comments() {
  return (
    <>
      <h4 className="mt-5">Comments</h4>
      <Comment isSubComment={false}/>
      <Comment isSubComment={true}/>
      <Comment isSubComment={false}/>
      <input type="text" placeholder="Your Message" />
    </>
  )
}