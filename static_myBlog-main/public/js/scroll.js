const targets = document.querySelectorAll('.target')

const options = {
   threshold:0.3
}

const callBack = (entries)=>{
   entries.forEach((entry)=>{
      if(entry.isIntersecting){
         entry.target.classList.add('active')
      }
      else{
         entry.target.classList.remove('active')
      }
   })
}



const observer = new IntersectionObserver(callBack, options);

targets.forEach((target)=>{
   observer.observe(target)
})



// // Tabii, işte her satırın işlevini açıklayan liste:

// 1. **`const targets = document.querySelectorAll('.target')`**  
// - `.target` sınıfına sahip tüm HTML öğelerini seçer ve `targets` adında bir değişkene atar. Bu değişken bir NodeList (dizi benzeri bir yapı) içerir.

// 2. **`const options = { threshold: 0.3 }`**  
// - Intersection Observer'ın tetiklenme durumunu belirleyen bir ayar nesnesi oluşturur. `threshold: 0.3`, hedef öğenin görünürlüğünün %30'u kadarı ekranda olduğunda tetikleneceğini belirtir.

// 3. **`const callBack = (entries) => { ... }`**  
// - Intersection Observer gözlemcisi tetiklendiğinde çalışacak bir `callBack` fonksiyonu tanımlar. `entries`, gözlemlenen her öğe için bilgi içeren bir dizi olarak geçer.

// 4. **`entries.forEach((entry) => { ... })`**  
// - `entries` dizisindeki her bir `entry` için bir döngü başlatır. Her `entry`, gözlemlenen öğelerden biri hakkında bilgi içerir.

// 5. **`if (entry.isIntersecting) { ... } else { ... }`**  
// - Eğer `entry.isIntersecting` değeri `true` ise, öğenin görünür olduğu anlamına gelir; değilse, görünür değil demektir.

// 6. **`entry.target.classList.add('active')`**  
// - Öğenin (`entry.target`) görünür olduğu durumda, `active` sınıfını ekler. Bu genelde CSS ile animasyon veya stil değişikliği için kullanılır.

// 7. **`entry.target.classList.remove('active')`**  
// - Öğenin görünür olmadığı durumda, `active` sınıfını kaldırır.

// 8. **`const observer = new IntersectionObserver(callBack, options)`**  
// - `callBack` fonksiyonunu ve `options` ayarlarını kullanarak bir Intersection Observer nesnesi (`observer`) oluşturur.

// 9. **`targets.forEach((target) => { observer.observe(target) })`**  
// - `targets` listesindeki her bir öğeyi `observe` fonksiyonuyla gözlemlemeye başlar. Bu sayede her `target` öğesi görünür olup olmadıklarına göre `callBack` fonksiyonuyla güncellenir.