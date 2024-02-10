function TaskItem({item,deletButton,ToggleButton}) {
  return (
  <>
    <div className="container text-center fs-2 text">
      <div className="d-flex flex-row mb-3">
        <div className="col" style={{textTransform: "capitalize",fontWeight:"500"}}>
          {item.task}
        </div>

        <div className="col text-white" style={item.completed===true?{background:"green"}:{background:"red"}}>
          {item.completed===true? "Completed":"Not Completed"}
        </div>

        <div className="col">
          {item.taskAssignedTo}
        </div>

        <div className="col d-flex flex-wrap" style={{gap:"10px"}}>
          <button className="btn btn-danger" onClick={(e)=>deletButton(item)}>Delete</button>
          <button className="btn btn-primary" onClick={(Index)=>ToggleButton(item)} >Toggle Task</button>
        </div>
      </div>
    </div>
  </>
  );
}

export default TaskItem;