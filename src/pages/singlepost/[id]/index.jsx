import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import SinglePostPage from "@/components/pages/SinglePostPage";

export default function SinglePage() {
  const router = useRouter();

  const [article, setArticle] = useState([]);
  const fetchData = () => {
    fetch(`https://dev.to/api/articles/${router.query.id}`)
      .then((response) => response.json())
      .then((data) => setArticle(data));
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <main>
      <SinglePostPage article={article} />
    </main>
  );
}
