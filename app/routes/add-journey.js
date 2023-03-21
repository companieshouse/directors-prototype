module.exports = function (router) {


  // Name
  router.get('/add/name', function (req, res) {
    req.session.type = req.query.type
    // Render the confirm company page
    res.render('add/name', {
      // To use the company data on that page use the following
      company: req.session.company
    })
  })
    
  router.post('/add/name', function (req, res) {
    res.redirect('/add/date-of-birth')
  })

  // Date of birth
  router.get('/add/date-of-birth', function (req, res) {
    // Render the confirm company page
    res.render('add/date-of-birth', {
      // To use the company data on that page use the following
      name: req.session.name,
      company: req.session.company
    })
  })





  
  router.post('/add/date-of-birth', function (req, res) {
    
  

      var errors = [];
      var dobHasError = false;
      
      if((req.session.data['dob-day'] == "" ) || (req.session.data['dob-month'] == "" )||(req.session.data['dob-year'] == "" ) ){
        dobHasError = true;
        errors.push({text: "Enter the PSC's date of birth", href: "#date-of-birth-error"});
      }
      
      if(dobHasError){
        res.render('./add/date-of-birth', {
          errorDOB: dobHasError,
              errorList: errors
            })
      }
      else
      {

        res.redirect('/add/nationality')
      
      }
    })
    

  // Nationality
  router.get('/add/nationality', function (req, res) {
    // Render the confirm company page
    res.render('add/nationality', {
      // To use the company data on that page use the following
      company: req.session.company
    })
  })
  
  router.post('/add/nationality', function (req, res) {
    res.redirect('../address-lookup/correspondence-address')
  })


  // Date of appointment
  router.get('/add/date-of-appointment', function (req, res) {
    // Render the confirm company page
    res.render('add/date-of-appointment', {
      // To use the company data on that page use the following
      company: req.session.company,
      type: req.session.type
    })
  })

  router.post('/add/date-of-appointment', function (req, res) {
    
    if(req.session.data['corporateuk'] == true){

      res.redirect('../add/rle/registered-in-uk')

    }
    else{

      res.redirect('/add/243')

    }

  }) 

  // 243
  router.get('/add/243', function (req, res) {
    // Render the confirm company page
    res.render('add/243', {
      // To use the company data on that page use the following
      company: req.session.company
    })
  })
  
  router.post('/add/243', function (req, res) {
    res.redirect('../add/percentage-of-shares')
  })




 // adding PSC - shares percentage 
 router.get('/add/percentage-of-shares', function (req, res) {
    // Render the confirm company page
    res.render('add/percentage-of-shares', {
      // To use the company data on that page use the following
      company: req.session.company
    })
  })

  router.post('/add/percentage-of-shares', function (req, res) {
    res.redirect('../add/percentage-of-voting-rights')
  })

  // adding PSC - voting rights 
  router.get('/add/percentage-of-voting-rights', function (req, res) {
    // Render the confirm company page
    res.render('add/percentage-of-voting-rights', {
      // To use the company data on that page use the following
      company: req.session.company
    })
  })

  router.post('/add/percentage-of-voting-rights', function (req, res) {
    res.redirect('../add/right-to-appoint')
  })



  router.post('/add/right-to-appoint', function (req, res) {

    // If a new person has been added set newPersonPendingMade to true, then display this on the Active directors page
    if(req.session.data['newPersonPendingMade'] != true){
      req.session.data['newPersonPendingMade'] = true;
    }

    if (req.session.data['corporateuk'] == true){
      req.session.type = 'corporateuk'
    }
      res.redirect('../check-your-answers')
  })




// Statement journey

router.get('/add/psc-options'), function(req,res) {
  res.render('add/psc-options')

}

// Identifying the correct PSC statement
router.post('/add/psc-options', function (req, res) {

//if the company has a statment - ask if they need to remove the statment 
if (req.session.data['psc-options'] == 'add-psc') {

  if(req.session.data['pscstatementtwoadd'] == true){ 

    res.redirect('../update/review-statement')
 
  }
  else{
   
    res.redirect('../add/type-of-psc')

  }
   
  }
  if (req.session.data['psc-options'] === 'notice-issued') {
    res.redirect('../add/psc-check-notice?type=addstatement')
  }
  else{
    res.redirect('../add/psc-check-statement?type=addstatement')
  }

})


 //What would you like to add?
 router.post('/add/type-of-psc', function (req, res) {


  if (req.session.data['type-of-psc'] === 'person') {
    
    res.redirect('../add/name?type=add')
   
  }
  else if (req.session.data['type-of-psc'] === 'corporate-body') {
    req.session.data['corporateuk'] = true;
    res.redirect('../add/rle/name')
  
  }
  else if(req.session.data['type-of-psc'] === 'orp'){
    
  }

  })


/*
  RLEs - Corporate bodies 
*/ 

//name of RLE (corporate body)
router.post('/add/rle/name', function (req, res) {

  //go to the address page 
  res.redirect('/address-lookup/rle-address')

})

router.post('/address-lookup/rle-address', function (req, res) {

  //go to the address page 
  res.redirect('/add/date-of-appointment')

})


//registed in the UK (corporate body)
router.post('/add/rle/registered-in-uk', function (req, res) {
  
  //if yes, UK 
  if (req.session.data['registered-in-uk'] === 'yes') {

    res.redirect('../rle/uk-company-type')
   
  }
  //if no, not in the UK, ask the stock market questions and trusts 
  else if (req.session.data['registered-in-uk'] === 'no') {

    res.redirect('../add/rle/shares-eu')
  
  }
})


/*
***** address-for-rle *****
*/

//UK company type
router.post('/add/rle/uk-company-type', function (req, res) {
  res.redirect('../rle/details')
})

//Common page for UK and overseas RLE journey - legal form, governing law etc
// pre-populate the details for UK companies 
router.post('/add/rle/details', function (req, res) {
  res.redirect('../percentage-of-shares')
})



/*
  PSC statements
*/   


//If the add psc action doesn't correspond to a statement continue on add psc journey. 
//If the statement corresponds to a PSC go down the remove journey

router.post('/update/review-statement', function (req, res) {

  // yes - remove statement journey
  if (req.session.data['statement-remove-to-add-psc'] === 'yes') {
    res.redirect('../update/interrupt-remove-statement')
  }
  // no - continue on PSC journey
  else{
    res.redirect('../add/name?type=add')
  }

})




// Identifying which statement is relevant - PSC statement 2 or 3 
router.post('/add/psc-options-2-3', function (req, res) {
  res.redirect('../add/psc-check-statement?type=addstatement')
})

// Identifying which notice statement is relevant  
router.post('/add/psc-check-notice', function (req, res) {
  res.redirect('../add/psc-check-statement?type=addstatement')
})


// date statement added to register
router.post('/add/psc-check-statement', function (req, res) {

  if (req.session.data['psc-options'] === 'statement-7') {
    res.redirect('../add/choose-psc')
  } 
  else{  
    res.redirect('../add/statement-date?type=addstatement')
  }

})

// date statement added to register
router.post('/add/statement-date', function (req, res) {
  req.session.type = req.query.type
  res.redirect('/check-your-answers')
})

// date statement added to register
router.post('/add/choose-psc', function (req, res) {
  req.session.type = req.query.type

  res.redirect('../add/statement-date?type=addstatement')

})


//set the 'pscstatementtwoadd' to false after the user has gone to the confirmation page
router.get('/directors-remove-statement-add-psc', function (req, res) {

  req.session.data['pscstatementtwoadd'] = false;
 
  res.redirect('/directors')
})

}