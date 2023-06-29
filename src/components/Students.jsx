

function Students({ students }) {
  return (
    <>
      <ul>
        {students.map((student, idx) => <Student student={student} key={idx} />)}
      </ul>
    </>
  )
}

function Student({ student }) {
  return (
    <li
      className="student">
      <h3>{student.name}</h3>
      <p>{student.bio}</p>
      <Score student={student}/>


    </li>
  )
}

function Score({student}){
  return(
    <div className="score">
      {student.scores.map((score, idx) => 
      <p>On {score.date} {student.name} scored {score.score}</p>
      )}
    </div>
  )
}



export default Students