
function Accordion(){
  return (
    <div className="container mt-5 mb-5">
      <h1 className="text-center mb-4">Anime Facts</h1>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item bg-dark text-light">
          <h2 className="accordion-header" id="headingOne">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              1. Anime is huge, especially in Japan.
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              According to a 2004 document from the Japan External Trade Organization, anime films and television shows account for 60% of the world’s animation-based entertainment. Almost 40 schools in Japan have declared anime as an individual subject on its own. Anime voice acting is also huge, as Japan has around 130 voice-acting schools. In Japan, more paper is used to print manga than toilet paper.
            </div>
          </div>
        </div>
        <div className="accordion-item bg-dark text-light">
          <h2 className="accordion-header" id="headingTwo">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              2. The highest-grossing anime film of all time is Kimi no Na Wa (Your Name).
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              The critical and commercial success of Makoto Shinkai’s Your Name can’t be understated. This film brought in more than $355 million worldwide.

              A unique and fictional storyline really makes this anime movie stand out from the others. Amazingly, most of the places shown in this anime are real! Here is one of them!
            </div>
          </div>
        </div>
        <div className="accordion-item bg-dark text-light">
          <h2 className="accordion-header" id="headingThree">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              3. Anime is not the same as “cartoon,” contrary to popular belief.
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              With complicated stories and in-depth character development, anime avoids the cartoon label and makes claims on being a higher art form.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Accordion