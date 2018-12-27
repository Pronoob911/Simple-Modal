//get modal element
var modal=document.getElementById("simpleModal");

//get open modal button
var modalBtn=document.getElementById('modalBtn');

//get close button
var closeBtn=document.getElementsByClassName('closeBtn')[0];

//listen for click
modalBtn.addEventListener('click',openModal);

function openModal(){
	modal.style.display='block';
}

closeBtn.addEventListener('click', closeModal);

function closeModal()
{
		modal.style.display='none';

}

//listen for outside click
window.addEventListener('click',clickOutside);
function clickOutside(e)
{
	if(e.target==modal)
	{
		modal.style.display='none';
	}
}