import StarRating from "../../StarRating"

const RateUs = () => {
  return (
    <><h2>Rate Us</h2>
    <StarRating />
    <p>Like our app, give us a rating</p>
    <div className="input-field">
                    <label htmlFor="notes">Notes (optional)</label>
                    <textarea name="notes" id="notes" cols="30" rows="10" placeholder="Enter additional content"></textarea>
                </div>
                <button type="submit" className="btn-pry">Submit rating</button></>
  )
}

export default RateUs