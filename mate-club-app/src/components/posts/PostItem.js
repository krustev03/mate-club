import Card from "../ui/Card";

const PostItem = (props) => {
  return (
    <li>
      <Card>
        <h1>{props.title}</h1>
        <p>{props.description}</p>
        <p>{props.date}</p>
      </Card>
    </li>
  );
};

export default PostItem;
