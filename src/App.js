import "./styles.css";
// import Comment from "./Comment.js";
// import Clock from "./Clock.js";
import Button from "./Button.js";

export default function App() {
  return (
    <div className="container" style={{ background: "#f2f2f2" }}>
      {/* <h1>Comment Section</h1>
      <Comment
        author={{
          name: " Hidayat",
          avatarUrl: "https://avatars.githubusercontent.com/u/34642738?v=4"
        }}
        text="Saya sampai komentar lho ini."
        date={new Date().toDateString() + " " + new Date().toTimeString()}
      /> */}
      {/* <h1> State </h1> */}
      <Button />
    </div>
  );
}
