import React, { useState } from "react";
import { Navbar } from "../shared/Navbar";
import { Label } from "../ui/label";
import { Input } from "../ui/input";

const PostJob = () => {
  const [input, setInput] = useState({
    title: "",
    description: "",
    requirements: "",
    salary: "",
    location: "",
    jobType: "",
    experience: "",
    position: 0,
    companyId: "",
  });
  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center w-screen my-5">
        <form action="" className="p-8 max-w-4xl border border-gray-200 shadow-lg rounded-md">
          <div className="grid grid-cols-2 gap-2">
            <div>
              <Label>Title</Label>
              <Input value={input.title} onChange={changeEventHandler} type="text" name="title" className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1" />
            </div>
            <div>
              <Label>Description</Label>
              <Input value={input.description} onChange={changeEventHandler} type="text" name="description" className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1" />
            </div>
            <div>
              <Label>Requirements</Label>
              <Input value={input.requirements} onChange={changeEventHandler} type="text" name="requirements" className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1" />
            </div>
            <div>
              <Label>Salary</Label>
              <Input value={input.salary} onChange={changeEventHandler} type="text" name="salary" className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1" />
            </div>
            <div>
              <Label>Location</Label>
              <Input value={input.location} onChange={changeEventHandler} type="text" name="location" className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1" />
            </div>
            <div>
              <Label>Job Type</Label>
              <Input value={input.jobType} onChange={changeEventHandler} type="text" name="jobType" className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1" />
            </div>
            <div>
              <Label>Experience Level</Label>
              <Input value={input.experience} onChange={changeEventHandler} type="text" name="experience" className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1" />
            </div>
            <div>
              <Label>Number of Position</Label>
              <Input value={input.position} onChange={changeEventHandler} type="number" name="position" className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PostJob;
