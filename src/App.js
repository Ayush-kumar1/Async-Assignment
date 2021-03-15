import "./styles.css";
import fakeFetch from "./Fakefetch";

export default function App() {
  // function fn() {
  //   setTimeout(() => {
  //     console.log("It's working");
  //   }, 3000);

  //   console.log("But i am first");
  // }

  // let temp=10;
  // let counter=setInterval(()=>{

  //   console.log(temp);
  //   temp--;

  //   if(temp===0){
  //     console.log("Bang Bang");
  //     clearInterval(counter);
  //   }

  // },3000)

  // c//

  // let arr = [
  //   {
  //     id: "task1",
  //     task: "First task"
  //   },
  //   {
  //     id: "task2",
  //     task: "Second task"
  //   },
  //   {
  //     id: "task3",
  //     task: "Third task"
  //   }
  // ];

  // const ans = async function () {
  //   try {
  //     const ansdata = await fakeFetch("ayush");
  //     console.log(ansdata);
  //     console.log("Success");
  //   } catch {
  //     // console.log("Error ocurred");
  //     console.log("Failure");
  //   }
  // };

  // ans();

  // async function getsserverresponselength(msg){

  //   const ans=await fakeFetch("Test message")
  //   return ans.length;
  // }

  // console.log(getsserverresponselength("Superman"))

  // const synctocall = async(msg1,msg2) => {
  //     try {
  //   const serverData = await fakeFetch(msg1);
  //   console.log(serverData + msg2);
  //     } catch(err) {
  //       console.log(err);
  //     }
  //   }

  // synctocall("superman and", "batman will feature in justice league");

  return (
    <div className="App">
      {/* a.// */}
      {/* <button onClick={fn}>click</button> */}

      {/* c.// */}

      {/* <div>
        <button
          onClick={() => {
            console.log("List of events");
          }}
        >
          Events
        </button>

        {arr.map((elem) => {
          return (
            <>
              <ul>
                <li
                  onClick={(event) => {
                    console.log(elem);
                  }}
                >
                  {elem.task}
                </li>
              </ul>
            </>
          );
        })}
      </div> */}

      {/* //Ex-11// */}
    </div>
  );
}
