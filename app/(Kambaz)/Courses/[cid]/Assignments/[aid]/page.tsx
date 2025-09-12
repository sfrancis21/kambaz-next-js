export default function AssignmentEditor() {
    return (
        <div id="wd-assignments-editor">
            <label htmlFor="wd-name"><h2>Assignment Name</h2></label><br />
            <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
            <textarea id="wd-description">
        The assignment is available online Submit a link to the landing page of
      </textarea>
            <br />
            <table>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-points">Points</label>
                    </td>
                    <td>
                        <input id="wd-points" value={100} />
                    </td>
                </tr><br />
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-group">Assignment Group</label>
                    </td>
                    <td>
                        <select id="wd-group">
                            <option value="">ASSIGNMENTS</option>
                        </select>
                    </td>
                </tr><br />
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-display-grade-as">Display Grade as</label>
                    </td>
                    <td>
                        <select id="wd-display-grade-as">
                            <option value="">Percentage</option>
                        </select>
                    </td>
                </tr><br />
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-submission-type">Submission Type</label>
                    </td>
                    <td>
                        <select id="wd-submission-type">
                            <option value="">Online</option>
                        </select><br /><br />
                        <label>Online Entry Options</label><br/>

                        <input type="checkbox" name="wd-text-entry" id="wd-text-entry"/>
                        <label htmlFor="wd-text-entry">Text Entry</label><br/>

                        <input type="checkbox" name="wd-website-url" id="wd-website-url"/>
                        <label htmlFor="wd-website-url">Website URL</label><br/>

                        <input type="checkbox" name="wd-media-recordings" id="wd-media-recordings"/>
                        <label htmlFor="wd-media-recordings">Media Recordings</label><br/>

                        <input type="checkbox" name="wd-student-annotation" id="wd-student-annotation"/>
                        <label htmlFor="wd-student-annotation">Student Annotation</label><br/>

                        <input type="checkbox" name="wd-file-upload" id="wd-file-upload"/>
                        <label htmlFor="wd-file-upload">File Uploads</label>
                        <br />
                    </td>
                </tr><br />
                <tr>
                    <td align="right" valign="top">
                    <label>Assign</label>
                    </td>
                    <tr>
                        <label htmlFor="wd-assign-to">Assign to</label><br/>

                            <input id="wd-assign-to" value={"Everyone"} />

                    </tr><br/>

                    <tr>
                        <label htmlFor="wd-due">Due</label><br/>
                            <input type="date"
                                   value="2024-05-13"
                                   id="wd-due"/>
                    </tr><br/>

                    <tr>
                        <td>
                            <label htmlFor="wd-available-from">Available from</label><br/>
                            <input type="date"
                                   value="2024-05-06"
                                   id="wd-available-from"/>
                        </td>
                        <td>
                            <label htmlFor="wd-available-until">Until</label><br/>
                            <input type="date"
                                   value="2024-05-20"
                                   id="wd-available-until"/>
                        </td>
                    </tr>
                </tr>
            </table>
            <hr></hr>
            <div style={{ textAlign: 'right' }}>
                <button>Cancel</button>
                <button>Save</button>
            </div>
        </div>
    );}
