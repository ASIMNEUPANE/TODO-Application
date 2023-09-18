// import { Spinner } from "react-bootstrap";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function Loading() {
  return (
    <SkeletonTheme color="#202020" highlightColor="#444">
      <p>
        <Skeleton count={3} />
        <Skeleton height={100} />
        <Skeleton style={{ borderRadius: 10 }} />
        <Skeleton className="foobar" />
      </p>
    </SkeletonTheme>
  );
}

export default Loading;
