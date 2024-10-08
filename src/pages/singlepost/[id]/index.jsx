import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import SinglePostPage from "@/components/pages/SinglePostPage";

export default function SinglePage() {
  const router = useRouter();
  const [article, setArticle] = useState([]);

  const id = router.query.id;

  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://dev.to/api/articles/${router.query.id}`
      );
      const data = await response.json();
      setArticle(data);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(id);

  useEffect(() => {
    fetchData();
  }, [id]);

  return (
    <main>
      <SinglePostPage article={article} />
    </main>
  );
}
