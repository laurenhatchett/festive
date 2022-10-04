import { Profile } from '../models/profile.js'
import { Post } from '../models/post.js'

function index(req, res) {
  Profile.find({})
  .then(profiles => {
    res.render('profiles/index', {
      profiles,
      title: 'User Profiles'
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')  //redirect somewhwere else
  })
}


function show(req, res) {
  Profile.findById(req.params.id)
  .populate('posts')
  .then(profile => {
    const isSelf = profile._id.equals(req.user.profile._id)
    console.log(profile)
    res.render('profiles/show', {
      title: `${profile.name}'s profile`,
      isSelf,
      profile
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/profiles')
  })
}

export {
  index,
  show,
}