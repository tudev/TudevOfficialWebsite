import Link from "next/link";
import React from "react";
import { Card, CardBody, CardTitle, CardText, Button } from "reactstrap";

const seperateName = (fullName) => {
  const [firstName, ...lastNameParts] = fullName.trim().split(" ");
  const lastName = lastNameParts.join(" ");
  return { firstName, lastName };
};

const ProfileCard = ({ member }) => {
  const { id, name, position, photo, bio } = member;
  const { firstName, lastName } = seperateName(name);

  return (
    <Card className="w-64 shadow-lg">
      <CardBody>
        <img
          src={
            photo ||
            `https://avatar.iran.liara.run/username?username=${firstName}+${lastName}`
          }
          alt={name}
          className="bg-info rounded-circle"
          style={{ width: "30%" }}
        />

        <CardTitle className="text-xl font-bold mb-2">{name}</CardTitle>
        <CardText className="text-sm text-gray-600 mb-2">{position}</CardText>
        {/* <CardText className="text-sm text-center mb-4">
          {bio || "Not availible"}
        </CardText> */}
        <Link href={`/members/${id}`} className="w-full btn btn-secondary">
          View Profile
        </Link>
      </CardBody>
    </Card>
  );
};

export default ProfileCard;
