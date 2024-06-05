async function sharePage() {
    const shareData = {
        title: "Tasama Boutique",
        text: "Second Hand & Vintage Boutiqoue",
        url: "https://dolor547.github.io/TasamaBoutiqueLinks/",
      };

    try {
        await navigator.share(shareData);
        resultPara.textContent = "Tasama Boutique shared successfully";
      } catch (err) {
        resultPara.textContent = `Error: ${err}`;
      }
}