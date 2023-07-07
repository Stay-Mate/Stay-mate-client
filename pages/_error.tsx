interface Props {
  statusCode: number;
}

interface gProps {
  res : any,
  err : any
}

function Error({ statusCode }: Props) {
  return (
    <p>
      {statusCode
        ? `An error ${statusCode} occurred on server`
        : "An error occurred on client"}
    </p>
  );
}

Error.getInitialProps = ({ res, err }:gProps) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 403;
  return { statusCode };
};

export default Error;
